FROM jekyll/jekyll:pages

ADD . .

# bypass nodejs bug by not using root
WORKDIR /app

RUN npm install

RUN git clone https://github.com/ColoradoDemography/coloradodemography.github.io.git

CMD ["node", "index.js"]
