import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import { useTranslation } from 'react-i18next';

export function useLocalized() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  return (field) => {
    if (!field) return '';
    // If it's a localized object
    if (field[currentLang]) return field[currentLang];
    // Fallback to English
    if (field.en) return field.en;
    // Fallback if it was just a string (legacy)
    if (typeof field === 'string') return field;
    return '';
  };
}

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "project"] | order(order asc)`)
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return { projects, loading };
}

export function useExperience() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "experience"] | order(startDate desc)`)
      .then((data) => {
        setExperience(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return { experience, loading };
}

export function useProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "profile"][0]`)
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return { profile, loading };
}

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(date desc)`)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return { posts, loading };
}
