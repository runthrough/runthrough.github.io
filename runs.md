---
layout: page
title: Runs
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
	<div class="gistpost">
		<script src="{{ site.gist_url }}about.md"></script>
	</div>
</div>