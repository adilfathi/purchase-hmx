FROM nginx:stable-alpine

COPY index.html /usr/share/nginx/html/index.html
COPY images /usr/share/nginx/html/images
COPY shared /usr/share/nginx/html/shared

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
