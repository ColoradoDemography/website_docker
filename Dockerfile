FROM jekyll/jekyll:pages

ADD . .

RUN npm install

RUN git clone https://github.com/ColoradoDemography/coloradodemography.github.io.git && \
apk add --update nodejs



CMD ["node", "index.js"]
