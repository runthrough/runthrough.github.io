---
layout: page
title: Runs
---

<ol>
	{% for post in site.posts %}
		<li>
			<a href="{{ post.url }}">
				{{ post.title }}
				<small>{{ post.date | date_to_string }}</small>
			</a>
		</li>
	{% endfor %}
</ol>