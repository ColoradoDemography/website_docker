FROM jekyll/jekyll:pages

ADD . .

RUN git clone https://github.com/ColoradoDemography/coloradodemography.github.io.git && \
apk add nodejs

# RUN npm install

CMD ["nodejs", "-v"]
