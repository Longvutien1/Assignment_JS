export const reRender = async (component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.render();
    }
    if (component.afterRender) component.afterRender();
};

export const reRender2 = async (component, id, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.render(id);
    }
    if (component.afterRender) component.afterRender();
};