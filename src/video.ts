import api from './services/api';
import { getVideo } from './types/Video';

const $ = document.querySelector.bind(document);

const iframe = <HTMLIFrameElement>$('#player');
const titulo = <HTMLSpanElement>$('#titulo');
const canal = <HTMLSpanElement>$('#nome-canal');
const ancoraCanal = <HTMLAnchorElement>$('#url-canal');
const categoria = <HTMLSpanElement>$('#nome-categoria');

const getVideoById = async (id: string) => {
    const response = await api.get(`/video/${id}`, {
        params: {
            fields: ['title', 'owner.screenname', 'owner.url', 'channel'].join(',')
        }
    });

    const video = getVideo(response.data);
    const { title, owner, channel } = video;
    const urlCanal = response.data['owner.url'];
    
    ancoraCanal.href = urlCanal;

    iframe.src = 'https://www.dailymotion.com/embed/video/' + id;
    
    titulo.innerText = title;
    canal.innerText = owner;
    categoria.innerText = channel;

    document.title = title + ' - Weeklymotion';
}

const url = new URL(window.location.href);
const id = url.searchParams.get('id');

if (id) {
    getVideoById(id);
} else {
    window.location.href = '/';
}