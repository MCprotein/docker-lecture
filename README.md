## 1. docker hub 로그인

```bash
$ docker login -u 아이디
```

## 2. docker 이미지 태그 설정

자신의 repository 이름 사용

```bash
$ docker build -f server.dockerfile -t chss3339/infra:202411060042 .
```

### 2-1. docker tag 변경

```bash
$ docker tag [이미지 이름]:[태그] [docker hub 아이디]/[이미지 이름]:[태그]
```

## 3. docker hub에 push

```bash
$ docker push chss3339/infra:202411060042
```

## 4. docker hub에서 pull

```bash
$ docker pull chss3339/infra:202411060042
```