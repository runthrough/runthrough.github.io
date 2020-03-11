---
layout: page
title: Languages
type: gist_post
gist_name: about
---

{% assign current_run = page.url | remove_first: "/" %}

<div class="runs">
	<table>
		{% for through in site[current_run] reversed %}
		<!-- {% increment language_no %} -->
		<tr>
			{% assign table_index = site[current_run].size | minus: language_no | plus: 1 %}
			{% if table_index < 10 %}
				{% assign table_index = table_index | prepend: '0' %}
			{% endif %}
			<td class="runs-no">{{ table_index }}.</td>
			<td class="runs-link">
				<a href="{{ through.url }}">
					{{ through.title }}
				</a>
				<span class="runs-date">{{ through.date | date_to_string }}</span>
			</td>
			<td class="runs-date">{{ through.date | date_to_string }}</td>
		</tr>
		{% endfor %}
	</table>
</div>

<div class="pagination">
	<h3>{{ site.title }} &middot; {{ site.tagline }} | {{ site.description }}</h3>
	{% include gist_post.html %}
</div>
