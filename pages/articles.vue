<template>
    <div class="container pv-oeyUxP pc-UnxAiZ app-layout" data-v-0359c710="" data-v-71f891dc="">
        <main>
            <div>
                <div data-v-650a2658="" class="articles-list">
                    <div data-v-650a2658="" class="featured">
                        <article data-v-8cbebf72="" data-v-650a2658="" class="featured">
                            <div data-v-8cbebf72="" class="image">
                                <NuxtLink data-v-8cbebf72="" to="/articles/get-started" class="">
                                    <img data-v-8cbebf72="" src="/articles/get-started.webp" alt="Get started with Alpine" width="16" height="9" />
                                </NuxtLink>
                            </div>

                            <div data-v-8cbebf72="" class="content">
                                <NuxtLink data-v-8cbebf72="" to="/articles/get-started" class="headline">
                                    <h1 data-v-8cbebf72="">Get started with Alpine</h1>
                                </NuxtLink>
                                <p data-v-8cbebf72="" class="description">Creating a blog with Alpine is a command away, as well as deploying to many platforms.</p>
                                <time data-v-8cbebf72="">August 23, 2022</time>
                            </div>
                        </article>
                    </div>

                    <div data-v-650a2658="" class="layout">
                        <article data-v-8cbebf72="" data-v-650a2658="" class="">
                            <div data-v-8cbebf72="" class="image">
                                <NuxtLink data-v-8cbebf72="" to="/articles/configure" class="">
                                    <img data-v-8cbebf72="" src="/articles/configure-alpine.webp" alt="Configure Alpine" width="16" height="9" />
                                </NuxtLink>
                            </div>

                            <div data-v-8cbebf72="" class="content">
                                <NuxtLink data-v-8cbebf72="" to="/articles/configure" class="headline">
                                    <h1 data-v-8cbebf72="">Configure Alpine</h1>
                                </NuxtLink>
                                <p data-v-8cbebf72="" class="description">Learn how to configure Alpine with the app.config.ts file.</p>
                                <time data-v-8cbebf72="">August 23, 2022</time>
                            </div>
                        </article>

                        <article data-v-8cbebf72="" data-v-650a2658="" class="">
                            <div data-v-8cbebf72="" class="image">
                                <NuxtLink data-v-8cbebf72="" to="/articles/write-articles" class="">
                                    <img data-v-8cbebf72="" src="/articles/write-articles.webp" alt="Write Articles" width="16" height="9" />
                                </NuxtLink>
                            </div>

                            <div data-v-8cbebf72="" class="content">
                                <NuxtLink data-v-8cbebf72="" to="/articles/write-articles" class="headline">
                                    <h1 data-v-8cbebf72="">Write Articles</h1>
                                </NuxtLink>
                                <p data-v-8cbebf72="" class="description">Writing Markdown articles in Alpine is straightforward.</p>
                                <time data-v-8cbebf72="">August 23, 2022</time>
                            </div>
                        </article>

                        <article data-v-8cbebf72="" data-v-650a2658="" class="">
                            <div data-v-8cbebf72="" class="image">
                                <NuxtLink data-v-8cbebf72="" to="/articles/design-tokens" class="">
                                    <img data-v-8cbebf72="" src="/articles/design-tokens.webp" alt="Customize Alpine" width="16" height="9" />
                                </NuxtLink>
                            </div>

                            <div data-v-8cbebf72="" class="content">
                                <NuxtLink data-v-8cbebf72="" to="/articles/design-tokens" class="headline">
                                    <h1 data-v-8cbebf72="">Customize Alpine</h1>
                                </NuxtLink>
                                <p data-v-8cbebf72="" class="description">Leverage the tokens.config.ts to give your identity to Alpine.</p>
                                <time data-v-8cbebf72="">August 23, 2022</time>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
useHead({
   title: "Articles",
   meta: [
      { name: "description", content: "All the blog posts available under paleocene." },
      {
         hid: "og:image",
         property: "og:image",
         content: `/articles/get-started.webp`,
      },
   ],
})
</script>

<style scoped>
.app-layout[data-v-0359c710] {
    min-width: 20rem;
}

.container[data-v-71f891dc] {
    margin-inline-end: auto;
    margin-inline-start: auto;
    width: 100%;
}

@media (min-width: 768px) {
    .pv-oeyUxP {
        padding-left: 4rem;
        padding-right: 4rem;
    }
}

@media (min-width: 640px) {
    .pv-oeyUxP {
        padding-left: 3rem;
        padding-right: 3rem;
    }
}

@media (min-width: 475px) {
    .pv-oeyUxP {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

.pv-oeyUxP {
    max-width: 64rem; /* the value was originaly 64rem */ /* The main whole size of the container (the main importent line) **************************************** */
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

*, :after, :before {
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
}

div {
    display: block;
}

body {
    line-height: inherit;
    margin: 0;
}

@media (min-width: 640px) {
    .articles-list[data-v-650a2658] {
        padding-left: 3rem;
        padding-right: 3rem;
    }
}

@media (min-width: 768px) {
    .articles-list[data-v-650a2658] {
        padding-left: 0;
        padding-right: 0
    }
}

.articles-list .featured[data-v-650a2658] {
    margin-bottom: 3rem;
    margin-top: 3rem;
}

@media (min-width: 768px) {
    .articles-list .featured[data-v-650a2658] {
        margin-bottom: 2rem;
        margin-top: 2rem;
    }
}

.articles-list .layout[data-v-650a2658] {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(1,minmax(0,1fr))
}

@media (min-width: 768px) {
    .articles-list .layout[data-v-650a2658] {
        gap: 2rem;
        grid-template-columns: repeat(2,minmax(0,1fr))
    }
}

@media (min-width: 1024px) {
    .articles-list .layout[data-v-650a2658] {
        grid-template-columns: repeat(3,minmax(0,1fr))
    }
}

.tour[data-v-650a2658] {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 30vh
}

article[data-v-8cbebf72] {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media (min-width: 768px) {
    article.featured[data-v-8cbebf72] {
        flex-direction: row;
        gap: 2rem;
    }
}

article img[data-v-8cbebf72] {
    aspect-ratio: 16/9;
    border-radius: 0.5rem;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
}

article .image[data-v-8cbebf72] {
    flex: 1;
}

article .image div[data-v-8cbebf72] {
    display: flex;
    flex-wrap: true;
    gap: 0.5rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    position: absolute;
}

article .image div span[data-v-8cbebf72] {
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1rem;
    padding: 0.25rem;
}

article .content[data-v-8cbebf72] {
    display: flex;
    flex: 1;
    flex-direction: column;
}

article .content .headline[data-v-8cbebf72] {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
}

.featured[data-v-8cbebf72] :is(article .content .headline):is(article .content .headline) {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    font-size: 2.25rem;
    line-height: 2.5rem;
    overflow: hidden;
}

article .content .description[data-v-8cbebf72] {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    margin-bottom: 1rem;
    overflow: hidden;
}

.featured[data-v-8cbebf72] :is(article .content .description):is(article .content .description) {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    overflow: hidden;
}

article .content time[data-v-8cbebf72] {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

:root.dark article .content time[data-v-8cbebf72],article .content time[data-v-8cbebf72] {
    color: #71717A;
}
</style>