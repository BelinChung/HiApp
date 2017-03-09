<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <f7-navbar theme="white">
          <f7-nav-left>
            <f7-link icon="iconfont icon-ios7reload" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>HiApp</f7-nav-center>
          <f7-nav-right>
            <f7-link icon="iconfont icon-feedback" icon-size="28" open-panel="right"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-pages>
          <f7-page toolbar-fixed navbar-fixed>
            <f7-toolbar tabbar labels>
              <f7-link icon="iconfont icon-ios7homeoutline" text="Home" tab-link="#home" active></f7-link>
              <f7-link icon="iconfont icon-ios7chatbubbleoutline" text="Contact" tab-link="#contact"></f7-link>
              <f7-link icon="iconfont icon-ios7gearoutline" text="Setting" tab-link="#setting"></f7-link>
            </f7-toolbar>
            <f7-tabs>
              <f7-tab id="home" active>Tab 1 content...</f7-tab>
              <f7-tab id="contact">Tab 2 content...</f7-tab>
              <f7-tab id="setting">Tab 3 content...</f7-tab>
            </f7-tabs>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
export default {}
</script>