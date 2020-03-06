---
layout: page
title: Runs
type: gistpost
---

<div class="runs">
	<ol>
		{% for post in site.posts reversed %}
			<li>
				<a href="{{ post.url }}">
					{{ post.title }}
					<small>{{ post.date | date_to_string }}</small>
				</a>
			</li>
		{% endfor %}
	</ol>
</div>

<div class="pagination">
	<h3>{{ site.title }} &middot; {{ site.tagline }} | {{ site.description }}</h3>
	{% include gistpost.html %}
</div>