FROM jekyll/jekyll:3.1

ADD . .

RUN npm install

RUN git clone https://github.com/ColoradoDemography/coloradodemography.github.io.git


CMD ["node", "index.js"]
