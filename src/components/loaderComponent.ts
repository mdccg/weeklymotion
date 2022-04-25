const $ = document.querySelector.bind(document);

const container = <HTMLDivElement>$('#plano-de-fundo');
const boasVindas = <HTMLSpanElement>$('#boas-vindas');
const naoEncontrado = <HTMLSpanElement>$('#nao-encontrado');
const coracaoPartidoIcon = <SVGElement>$('#coracao-partido');
const televisaoIcon = <SVGElement>$('#televisao');
const loadingIcon = <SVGElement>$('#loading');

const set = (element: HTMLElement | SVGElement, value: string) =>
  element.style.display = value;

export const hideContainer = () => set(container, 'none');

const hideCoracaoPartido = () => {
  set(naoEncontrado, 'none');
  set(coracaoPartidoIcon, 'none');
}

const hideTelevisao = () => {
  set(boasVindas, 'none');
  set(televisaoIcon, 'none');
}

const stopLoading = () => set(loadingIcon, 'none');

const showContainer = () => set(container, 'flex');

export const showCoracaoPartido = () => {
  showContainer();
  hideTelevisao();
  stopLoading();
  set(naoEncontrado, 'block');
  set(coracaoPartidoIcon, 'block');
}

export const showTelevisao = () => {
  showContainer();
  hideCoracaoPartido();
  stopLoading();
  set(boasVindas, 'block');
  set(televisaoIcon, 'block');
}

export const load = () => {
  showContainer();
  hideCoracaoPartido();
  hideTelevisao();
  set(loadingIcon, 'block');
}