---
layout: page
title: Runs
type: gistpost
---

<div class="runs">
	<table>
	{% for post in site.posts %}
	<!-- {% increment post_no %} -->
	<tr>
		<td class="runs-no">{{ site.posts.size | minus: post_no | plus: 1 }}.</td>
		<td class="runs-link">
			<a href="{{ post.url }}">
				{{ post.title }}
			</a>
			<span class="runs-date">{{ post.date | date_to_string }}</span>
		</td>
		<td class="runs-date">{{ post.date | date_to_string }}</td>
	</tr>
	{% endfor %}
	</table>
	<!-- <ol>
		{% for post in site.posts reversed %}
			<li>
				<span>{{post_no}}</span>
				<a href="{{ post.url }}">
					{{ post.title }}
					<small>{{ post.date | date_to_string }}</small>
				</a>
			</li>
		{% endfor %}
	</ol> -->
</div>

<div class="pagination">
	<h3>{{ site.title }} &middot; {{ site.tagline }} | {{ site.description }}</h3>
	{% include gistpost.html %}
</div>
