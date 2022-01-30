import Access from '../../components/layout/header/Access/Access.html';
import Header from '../../components/layout/header/Header/Header';
import BreadcrumbGlobal from '../../components/layout/Breadcrumb/BreadcrumbGlobal.html';
import Options from '../../components/layout/content/Options/Options.html';

const template = `
    ${Access}
    ${Header}
    ${BreadcrumbGlobal}
    <div class="container-fluid qg-site-width">
        <div id="qg-content">
            <div id="qg-one-col" class="row wide">
                <div id="qg-primary-content" role="main">
                    <h1>Queensland Government Web Template HTML Template</h1>
                    <p class="lead">If your page needs lead text to add emphasis, add it here.</p>
                    <p>[Put more content here]</p>
                    <h2>To use this template</h2>
                    <ol>
                        <li>Make a copy of this file, and move it to your site directory</li>
                        <li>Copy the /assets/ directory to your site</li>
                        <li><a href="https://qld-gov-au.github.io/web-template-release/">Read through the documentation on using the Queensland Government Web Template</a></li>
                        <li>
                            Create a new section nav file
                            <ol>
                                <li>Find the section nav file at /assets/includes/section-nav/template-nav.html in your site</li>
                                <li>Make a copy of it, and rename it something meaningful for your project</li>
                                <li>Add your content</li>
                            </ol>
                        </li>
                        <li>Replace the content on this page with the content for your site. Pay special attention to the meta data as this is important for site search, and google search.</li>
                    </ol>
                    <div class="qg-content-footer">
                        <dl>
                            <dt>Last updated:</dt>
                            <dd>11 January 2018</dd>
                            <dt>Last reviewed:</dt>
                            <dd>11 January 2018</dd>
                        </dl>
                </div>
                ${Options}
            </div>
        </div>
        </div>
    </div>
    <!--#include virtual="/assets/includes-local/footer/footer.html"-->
`;
export default template;
