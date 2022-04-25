import { hideContainer, load, showCoracaoPartido } from './components/loaderComponent';
import { showVideos } from './components/videoComponent';
import api from './services/api';

const $ = document.querySelector.bind(document);

const app = <HTMLDivElement>$('#app');
const input = <HTMLInputElement>$(`input[name='search']`);

const searchVideos = async (search: string) => {
  load();

  document.title = search + ' - Weeklymotion';

  const response = await api.get('/videos', {
    params: {
      search,
      fields: ['id', 'title', 'owner.screenname', 'channel'].join(',')
    }
  });

  const videosJson = response.data.list;

  if (!videosJson.length) {
    showCoracaoPartido();

  } else {
    showVideos(videosJson, app);
    hideContainer();
  }
}

const url = new URL(window.location.href);
const search = url.searchParams.get('search');

if (search) {
  searchVideos(search);
  input.value = search;
}