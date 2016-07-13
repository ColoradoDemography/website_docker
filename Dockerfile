FROM node:5

RUN apt-get update && \
    apt-get install -y ruby ruby-dev gcc git rsync make && \
    gem install jekyll && \
    git clone https://github.com/ColoradoDemography/jekyll-node-build.git && \
    cd jekyll-node-build && \
    npm install && \
    git clone https://github.com/ColoradoDemography/coloradodemography.github.io.git

CMD ["node", "index.js"]