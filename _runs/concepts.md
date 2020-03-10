---
layout: page
title: Concepts
type: gist_post
gist_name: about
---

<div class="runs">
	<table>
		{% for post in site.posts %}
		<!-- {% increment post_no %} -->
		<tr>
			{% assign table_index = site.posts.size | minus: post_no | plus: 1 %}
			{% if table_index < 10 %}
				{% assign table_index = table_index | prepend: '0' %}
			{% endif %}
			<td class="runs-no">{{ table_index }}.</td>
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
</div>

<div class="pagination">
	<h3>{{ site.title }} &middot; {{ site.tagline }} | {{ site.description }}</h3>
	{% include gistpost.html %}
</div>
