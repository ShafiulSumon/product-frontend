import Card from "../components/Card";

function HomePage() {

    const p1 = {
        'name': 'Water Bottle',
        'desc': 'This is for children',
        'price': "490"
    }

    const p2 = {
        'name': 'Chocolate',
        'desc': 'This is so good for health. Please eat it everyday.',
        'price': "540"
    }

    const p3 = {
        'name': 'Hello World And Every Planet',
        'desc': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus soluta sed nihil doloribus dolor accusamus perferendis velit fugit eligendi.',
        'price': '29010'
    }

    // const design = "w-36 h-20 bg-orange-300 rounded border border-white text-center";

    return (
        // <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl: gap-3">
        <div className="flex flex-wrap gap-4 justify-start m-10">
            <Card product={p1}/>
            <Card product={p2}/>
            <Card product={p3}/>
            <Card product={p3}/>
            <Card product={p3}/>
            <Card product={p3}/>
            <Card product={p3}/>
            <Card product={p3}/>
            <Card product={p3}/>
            <Card product={p3}/>
            <Card product={p3}/>
            <Card product={p3}/>
            
        </div>
    );
}

export default HomePage;