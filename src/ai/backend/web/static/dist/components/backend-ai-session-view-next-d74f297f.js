import{_ as s,e as i,B as t,c as a,I as e,a as r,i as o,x as n,j as m,k as c}from"./backend-ai-webui-ff615d7c.js";import"./backend-ai-session-launcher-f2168178.js";import"./backend-ai-session-view-9dfecd1f.js";import"./lablup-codemirror-ffd26693.js";import"./lablup-progress-bar-1654fa15.js";import"./slider-de8fb317.js";import"./mwc-check-list-item-024de72d.js";import"./media-query-controller-073cb482.js";import"./dir-utils-0f2e97d3.js";import"./vaadin-grid-daf9e135.js";import"./vaadin-grid-filter-column-6bc1e022.js";import"./vaadin-grid-selection-column-d5bcfe1b.js";import"./json_to_csv-35c9e191.js";import"./backend-ai-resource-monitor-3fbbf776.js";import"./backend-ai-list-status-156b5a18.js";import"./lablup-grid-sort-filter-column-d9354830.js";import"./vaadin-grid-sort-column-e05311b3.js";import"./vaadin-iconset-0aeb0e51.js";import"./lablup-activity-panel-eac43277.js";import"./mwc-formfield-317a291d.js";import"./mwc-tab-bar-4284db18.js";let l=class extends t{static get styles(){return[a,e,r,o``]}async _viewStateChanged(s){await this.updateComplete}render(){return n`
      <backend-ai-react-session-list
        @moveTo="${s=>{const i=s.detail.path;globalThis.history.pushState({},"",i),m.dispatch(c(decodeURIComponent(i),{}))}}"
      ></backend-ai-react-session-list>
    `}};l=s([i("backend-ai-session-view-next")],l);