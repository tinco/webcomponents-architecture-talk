dev:
	docker run -it --rm -v $$PWD:/app -p 3000:3000 ruphin/webdev "npm start"
.PHONY: default

production:
	ssh -t s.ruph.in ./devsummit.sh
.PHONY: production

shell:
	docker run -it --rm -v $$PWD:/app ruphin/webdev bash
.PHONY: shell
