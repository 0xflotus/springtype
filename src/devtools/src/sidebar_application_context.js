const getApplicationContext = () => {

    const data = {...window.$st.APPLICATION_CONTEXT};

    data.__proto__ = null;

    return data;
};

chrome.devtools.panels.elements.createSidebarPane("SpringType Runtime", (sidebar) => {

    const updateComponetProperties = () => {
        sidebar.setExpression("(" + getApplicationContext.toString() + ")()", 'Application Context');
    };

    updateComponetProperties();

    chrome.devtools.panels.elements.onSelectionChanged.addListener(updateComponetProperties);
});