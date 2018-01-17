import Api from '@/services/Api';

export default {
  getArticles() {
    return Api().get('article');
  },
  createArticle(article) {
    return Api().post('article', article);
  },
};
