FROM jekyll/jekyll:pages

ADD . .

RUN npm install

RUN git clone https://github.com/ColoradoDemography/coloradodemography.github.io.git


CMD ["node", "index.js"]
