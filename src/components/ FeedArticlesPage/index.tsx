import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import { toast } from 'react-toastify';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CircularProgress,
  Breadcrumbs,
  Link,
  Pagination,
} from '@mui/material';
import { Article } from '../../types/article.type';
import './FeedArticlesPage.css';

export const FeedArticlesPage = () => {
  const { feedUrl } = useParams();
  const parser = new Parser();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
        const feed = await parser.parseURL(CORS_PROXY + feedUrl);
        const newArticles = feed.items.map((item) => ({
          id: item.guid,
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
        }));

        setArticles(newArticles);
      } catch (error) {
        toast.error('Error fetching feed articles');
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [feedUrl]);

  const handleLearnMore = (articleUrl: string) => {
    window.open(articleUrl, '_blank');
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className="homeContainer">
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          Feeds
        </Link>
        <Typography color="text.primary">Articles</Typography>
      </Breadcrumbs>
      <h1>Feed Articles</h1>
      <div className="centeredContainer">
        {loading ? (
          <CircularProgress />
        ) : (
          <div className={'list'}>
            {currentArticles.map((article) => (
              <Card className="feedItem" key={article.id}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.pubDate}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleLearnMore(article.link as string)}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        )}
      </div>
      <Pagination
        className="pagination"
        count={Math.ceil(articles.length / articlesPerPage)}
        page={currentPage}
        onChange={handleChange}
      />
    </div>
  );
};
