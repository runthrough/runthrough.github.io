---
layout: page
title: Languages
type: gist_post
gist_name: about
---

<div class="runs">
	<table>
		{% for lang in site.languages reversed %}
		<!-- {% increment language_no %} -->
		<tr>
			{% assign table_index = site.languages.size | minus: language_no | plus: 1 %}
			{% if table_index < 10 %}
				{% assign table_index = table_index | prepend: '0' %}
			{% endif %}
			<td class="runs-no">{{ table_index }}.</td>
			<td class="runs-link">
				<a href="{{ lang.url }}">
					{{ lang.title }}
				</a>
				<span class="runs-date">{{ lang.date | date_to_string }}</span>
			</td>
			<td class="runs-date">{{ lang.date | date_to_string }}</td>
		</tr>
		{% endfor %}
	</table>
</div>

<div class="pagination">
	<h3>{{ site.title }} &middot; {{ site.tagline }} | {{ site.description }}</h3>
	{% include gist_post.html %}
</div>
