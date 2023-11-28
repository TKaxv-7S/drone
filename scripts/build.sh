#!/bin/sh

go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,https://mirrors.aliyun.com/goproxy/,direct

echo "building docker images for ${GOOS}/${GOARCH} ..."

REPO="github.com/drone/drone"

# compile the server using the cgo
go build -ldflags "-extldflags \"-static\"" -tags="nolimit" -o release/linux/${GOARCH}/drone-server ${REPO}/cmd/drone-server
