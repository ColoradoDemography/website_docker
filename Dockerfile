FROM node:5

ADD . .

RUN apt-get update && \
    apt-get install -y ruby ruby-dev gcc git rsync make && \
    gem install jekyll && \
    npm install && \
    git clone https://github.com/ColoradoDemography/coloradodemography.github.io.git && \
    cd coloradodemography.github.io && \
    jekyll build
    

CMD ["node", "index.js"]