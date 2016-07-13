FROM jekyll/jekyll:pages

RUN mkdir app && \
  cd app && \
  git clone https://github.com/ColoradoDemography/jekyll-node-build.git && \
  cd jekyll-node-build && \
  npm install && \
  git clone https://github.com/ColoradoDemography/coloradodemography.github.io.git

CMD ["node", "index.js"]



