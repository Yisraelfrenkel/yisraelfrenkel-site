(() => {
  const frame = document.querySelector('[data-youtube-id]');
  if (frame) {
    const id = frame.dataset.youtubeId;
    if (id && id !== 'VIDEO_ID_HERE') {
      frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}" title="Watch the first class" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      const iframe = frame.querySelector('iframe');
      iframe.style.cssText = 'width:100%;height:100%;border:0';
    }
  }
})();
