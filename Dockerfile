FROM node:17.4

ADD . .

RUN apt-get update && \
    apt-get install -y gcc git rsync && \
    npm install && \
    git clone https://github.com/ColoradoDemography/WebsiteGrid.git && \
    cd WebsiteGrid

CMD ["node", "index.html"]
