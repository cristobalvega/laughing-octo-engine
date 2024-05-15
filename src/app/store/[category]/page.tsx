interface CategoryProps {
    params: {
        category: string
    }
}

export default function Category(props: CategoryProps) {
    const { category } = props.params;
    console.log('props', props);
    return (
        <h1>Categoría dinamica: {category} </h1>
    )
}