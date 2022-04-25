import Video, { getVideo } from './../types/Video';

const parseVideoToHtml = (video: Video) => {
    const { id, title, owner } = video;

    return `<a class="video" href="/video.html?id=${id}">
    <img class="thumbnail" src="https://www.dailymotion.com/thumbnail/video/${id}" alt="${title}" />
    <div class="informacoes">
      <span class="titulo">${title}</span>
      <span class="canal">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><circle cx="12" cy="8" r="4"/><path d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z" /></svg>
        <span class="nome-canal">${owner}</span>
      </span>
    </div>
  </a>`;
}

export const showVideos = (list: any, container: HTMLDivElement) => {
    const videos: Video[] = list.map((json: any) => getVideo(json));
    const videosHtml = videos.map(video => parseVideoToHtml(video)).join('');
    container.innerHTML = videosHtml;
}