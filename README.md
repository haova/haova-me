# HaoVA

## Install

Install Hugo

```bash
curl -L -o /tmp/hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v0.122.0/hugo_0.122.0_linux-amd64.tar.gz
tar -xf /tmp/hugo.tar.gz -C /tmp
mv /tmp/hugo ~/.local/bin
```

## Usage

Open two separate terminals and run:

```bash
npm run dev
```

```bash
hugo server
```

## Deploy

**Source code**

```bash
curl -L -o /tmp/haova-me.zip https://github.com/haova/haova-me/archive/refs/heads/master.zip
unzip /tmp/haova-me.zip -d /tmp
rm -rf /srv/haova-me
mv /tmp/haova-me-master /srv/haova-me
```

```bash
cd /srv/haova-me
chmod +x ./scripts/build.sh
./scripts/build.sh
```

**Caddy**

```json
{
  "@id": "haova",
  "handle": [
    {
      "handler": "subroute",
      "routes": [
        {
          "match": [{ "host": ["haova.me"] }],
          "handle": [
            {
              "handler": "static_response",
              "status_code": "301",
              "headers": { "Location": ["https://www.haova.me"] }
            }
          ]
        },
        {
          "handle": [{ "handler": "file_server", "root": "/srv/haova-me/public" }]
        }
      ]
    }
  ],
  "match": [{ "host": ["www.haova.me", "haova.me"] }]
}
```

**Automation**

```bash
crontab -e
```

```bash
00 13 * * * /srv/haova-me/scripts/build.sh
```

## License

MIT.
