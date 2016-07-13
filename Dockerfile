FROM node:5

ADD . .

RUN apt-get update && \
    apt-get install -y ruby ruby-dev gcc git rsync make && \
    gem install jekyll && 
    npm install && \
    git clone https://github.com/ColoradoDemography/coloradodemography.github.io.git

CMD ["node", "index.js"]