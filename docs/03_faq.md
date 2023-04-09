---
title: Frequently Asked Questions
author: Imani
---

Create FAQ post in `_faqs` folder (categories are optional):
```yml
---
title: Games That Influnce My Work
categories: [games]
---
```

To add the following to a page:
{% raw %}
```yaml
{% include faqs.html multiple="true" title="Frequently asked questions" category="presale" subtitle="Find quicke answers to frequent pre-sale questions asked by customers" %}
```
{% endraw %}

Specifying category is optional, if not defined all FAQ posts will be displayed. To display multiple FAQs at the same time without one collapsing when the other one is opened, add the `multiple="true"` attribute.