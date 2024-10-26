import BaseLayout from "./BaseLayout"

const Layout = (prop) => {
    return (
        <>
            <h1>Componente Layout</h1>
            <BaseLayout class={"shadow-lg p-3 mb-5 bg-body-tertiary rounded"}>
                {prop.children}
            </BaseLayout>
        </>
    )
}

export default Layout