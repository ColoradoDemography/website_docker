FROM jekyll/jekyll:pages

ADD . .

RUN git clone https://github.com/ColoradoDemography/coloradodemography.github.io.git && \
apk add --update nodejs

# RUN npm install

CMD ["npm", "-v"]
