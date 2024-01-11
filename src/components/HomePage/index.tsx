import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  TextField,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Feed } from '../../types/feed.type';
import { addFeed, deleteFeed, getFeeds } from '../../services/feed';
import './HomePage.css';

export const defaultFeeds: Feed[] = [
  {
    id: 11,
    title: 'NASA Breaking release news',
    body: 'https://www.nasa.gov/news-release/feed/',
  },
  {
    id: 12,
    title: 'Reddit front page',
    body: 'https://www.reddit.com/.rss',
  },
  {
    id: 13,
    title: 'Mobile World Live',
    body: 'https://www.mobileworldlive.com/feed/',
  },
];

export const HomePage = () => {
  const [feeds, setFeeds] = useState<Feed[]>(() => {
    const storedFeeds = localStorage.getItem('feeds');
    return storedFeeds ? JSON.parse(storedFeeds) : defaultFeeds;
  });
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    getFeedsList();
  }, []);

  useEffect(() => {
    localStorage.setItem('feeds', JSON.stringify(feeds));
  }, [feeds]);

  const getFeedsList = () => {
    getFeeds(Number(userId))
      .then((data) => {
        data.map((feed: Feed) => {
          if (feed.id && feed.id > 10) {
            setFeeds([...feeds, feed]);
          }
        });
      })
      .catch(() => {
        toast.error('Error fetching feeds');
      });
  };

  const handleLearnMore = (feedUrl: string) => {
    navigate(`/feed/${encodeURIComponent(feedUrl)}`);
  };

  const handleClose = () => setOpen(false);
  const handleAddFeed = () => setOpen(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get('name') as string;
    const body = formData.get('url') as string;
    const newFeed = {
      userId: Number(userId),
      title,
      body,
    };

    addFeed(newFeed)
      .then((data) => {
        setFeeds([...feeds, data]);
        toast.success('Success adding feed');
      })
      .catch(() => {
        toast.error('Error adding feed');
      });

    handleClose();
  };

  const handleDeleteFeed = (id: number) => {
    deleteFeed(id)
      .then(() => {
        setFeeds(feeds.filter((feed) => feed.id !== id));
        toast.success('Success deleting feed');
      })
      .catch(() => {
        toast.error('Error deleting feed');
      });
  };

  return (
    <div className="homeContainer">
      <div className="feedHeader">
        <h1 className="feedTitle">All feeds</h1>
        <Fab
          color="primary"
          aria-label="add"
          size="small"
          onClick={handleAddFeed}
        >
          <AddIcon />
        </Fab>
      </div>
      <div className={'list'}>
        {feeds.map((feed) => (
          <Card className="feedItem" key={feed.id}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {feed.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => handleDeleteFeed(feed.id as number)}
              >
                Delete
              </Button>
              <Button size="small" onClick={() => handleLearnMore(feed.body)}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Add new feed</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new feed, please enter the name and URL below.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Feed Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="url"
            name="url"
            label="Feed URL"
            type="url"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add feed</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
