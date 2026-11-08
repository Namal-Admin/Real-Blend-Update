import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { BreakingTicker } from './components/BreakingTicker';
import { FeaturedGrid } from './components/FeaturedGrid';
import { ArticlesSection } from './components/ArticlesSection';
import { ArticleModal } from './components/ArticleModal';
import { TipModal } from './components/TipModal';
import { Footer } from './components/Footer';
import { Article, Category, Comment, NewsTip } from './types';
import { INITIAL_ARTICLES, INITIAL_BREAKING_NEWS, INITIAL_COMMENTS } from './data/articles';

export default function App() {
  const [articles] = useState<Article[]>(INITIAL_ARTICLES);
  const [breakingItems] = useState<string[]>(INITIAL_BREAKING_NEWS);
  const [activeCategory, setActiveCategory] = useState<Category | 'Saved'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isTipModalOpen, setIsTipModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Local storage for saved bookmarks
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('realblend_saved_articles');
      return saved ? JSON.parse(saved) : ['story-top-main', 'story-technology-1'];
    } catch {
      return ['story-top-main', 'story-technology-1'];
    }
  });

  // Local storage for interactive comments
  const [commentsMap, setCommentsMap] = useState<Record<string, Comment[]>>(() => {
    try {
      const saved = localStorage.getItem('realblend_comments');
      return saved ? JSON.parse(saved) : INITIAL_COMMENTS;
    } catch {
      return INITIAL_COMMENTS;
    }
  });

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('realblend_saved_articles', JSON.stringify(savedArticleIds));
    } catch {
      // Ignore quota errors
    }
  }, [savedArticleIds]);

  // Persist comments
  useEffect(() => {
    try {
      localStorage.setItem('realblend_comments', JSON.stringify(commentsMap));
    } catch {
      // Ignore quota errors
    }
  }, [commentsMap]);

  // Toast feedback helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleToggleSave = (articleId: string) => {
    setSavedArticleIds((prev) => {
      if (prev.includes(articleId)) {
        showToast('Story removed from saved bookmarks');
        return prev.filter((id) => id !== articleId);
      } else {
        showToast('Story saved to your reading list!');
        return [...prev, articleId];
      }
    });
  };

  const handleAddComment = (articleId: string, authorName: string, text: string) => {
    const newComment: Comment = {
      id: `c_${Date.now()}`,
      articleId,
      authorName,
      text,
      timestamp: 'Just now',
      likes: 0
    };

    setCommentsMap((prev) => ({
      ...prev,
      [articleId]: [newComment, ...(prev[articleId] || [])]
    }));

    showToast('Your comment has been published!');
  };

  const handleLikeComment = (commentId: string) => {
    if (!selectedArticle) return;
    const articleId = selectedArticle.id;
    setCommentsMap((prev) => {
      const list = prev[articleId] || [];
      const updated = list.map((c) =>
        c.id === commentId ? { ...c, likes: c.likes + 1 } : c
      );
      return { ...prev, [articleId]: updated };
    });
  };

  const handleShareArticle = (article: Article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard!');
    }
  };

  const handleSubmitTip = (_tip: NewsTip) => {
    showToast('Thank you! Your story tip has been sent to our editors.');
  };

  // Top Story & Side Story
  const topStory = useMemo(() => {
    return articles.find((a) => a.isTopStory) || articles[0];
  }, [articles]);

  const sideStory = useMemo(() => {
    return articles.find((a) => a.isSideStory) || articles[1];
  }, [articles]);

  // Filtered stories for latest stories section
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      // Category filter
      if (activeCategory === 'Saved') {
        if (!savedArticleIds.includes(article.id)) return false;
      } else if (activeCategory !== 'All') {
        if (article.category !== activeCategory) return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = article.title.toLowerCase().includes(query);
        const inExcerpt = article.excerpt.toLowerCase().includes(query);
        const inContent = article.content.some((p) => p.toLowerCase().includes(query));
        const inCategory = article.category.toLowerCase().includes(query);
        const inTags = article.tags?.some((t) => t.toLowerCase().includes(query)) || false;
        const inAuthor = article.author.toLowerCase().includes(query);

        return inTitle || inExcerpt || inContent || inCategory || inTags || inAuthor;
      }

      return true;
    });
  }, [articles, activeCategory, searchQuery, savedArticleIds]);

  // Related articles for the modal
  const relatedArticles = useMemo(() => {
    if (!selectedArticle) return [];
    return articles.filter(
      (a) => a.id !== selectedArticle.id && (a.category === selectedArticle.category || a.isTopStory)
    );
  }, [articles, selectedArticle]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5] text-[#111111]">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#111111] text-white text-xs font-bold px-4 py-3 shadow-xl border-l-4 border-[#e31b23] animate-in slide-in-from-bottom duration-200">
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <Header
        savedCount={savedArticleIds.length}
        onOpenSaved={() => setActiveCategory('Saved')}
        onOpenTipModal={() => setIsTipModalOpen(true)}
        onSelectCategory={(cat) => {
          setActiveCategory(cat as Category);
          setSearchQuery('');
        }}
      />

      {/* Navigation */}
      <Navigation
        activeCategory={activeCategory === 'Saved' ? 'All' : activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
        }}
      />

      {/* Breaking News Ticker */}
      <BreakingTicker
        items={breakingItems}
        onSelectBreaking={(_text) => {
          setSelectedArticle(topStory);
        }}
      />

      {/* Main Container matching: .container { width: 88%; max-width: 1250px; margin: 30px auto; } */}
      <main className="w-[92%] sm:w-[88%] max-w-[1250px] mx-auto my-[30px] flex-1">
        {/* Show Featured Grid only on Home (All) and when not searching or in saved view */}
        {activeCategory === 'All' && !searchQuery.trim() && (
          <FeaturedGrid
            topStory={topStory}
            sideStory={sideStory}
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        )}

        {/* Latest Stories Section */}
        <ArticlesSection
          articles={filteredArticles}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          savedArticleIds={savedArticleIds}
          onSelectArticle={(article) => setSelectedArticle(article)}
          onToggleSave={handleToggleSave}
          onShare={handleShareArticle}
          onClearFilters={() => {
            setActiveCategory('All');
            setSearchQuery('');
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
          const newsEl = document.getElementById('news');
          newsEl?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenTipModal={() => setIsTipModalOpen(true)}
      />

      {/* Full Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={Boolean(selectedArticle)}
        onClose={() => setSelectedArticle(null)}
        isSaved={selectedArticle ? savedArticleIds.includes(selectedArticle.id) : false}
        onToggleSave={handleToggleSave}
        comments={selectedArticle ? commentsMap[selectedArticle.id] || [] : []}
        onAddComment={handleAddComment}
        onLikeComment={handleLikeComment}
        relatedArticles={relatedArticles}
        onSelectRelated={(article) => setSelectedArticle(article)}
        onShare={handleShareArticle}
      />

      {/* Whistleblower / Scoop Tip Modal */}
      <TipModal
        isOpen={isTipModalOpen}
        onClose={() => setIsTipModalOpen(false)}
        onSubmitTip={handleSubmitTip}
      />
    </div>
  );
}
