FROM node:17.4

ADD . .

RUN apt-get update && \
    apt-get install -y gcc git rsync && \
    npm install && \
    mkdir public && \
    cd public && \
    git clone https://github.com/ColoradoDemography/WebsiteGrid.git && \
    cd WebsiteGrid

CMD ["node", "index.js"]
