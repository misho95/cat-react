import Rating from '@mui/material/Rating';

function Content( {data}){

    console.log(data);

    return(
        <div className='flex flex-col gap-10 mt-10'>
            {
                data.map( (info, index) => {
                    return(
                        <div className="w-full flex flex-col sm:flex-row gap-3" key={index}>
                            <div>
                                <div className="text-xl p-2">{info.name}</div>
                                <div><img src={info.image_link} className="w-full rounded-lg"/></div>
                            </div>
                            <div className='flex flex-col gap-2 mt-10'>
                                <div className='flex gap-2'><b>origin: </b>{info.origin}</div>
                                <div className='flex gap-2'><b>children_friendly: </b><Rating name="read-only" value={info.children_friendly} readOnly /></div>
                                <div className='flex gap-2'><b>family_friendly: </b><Rating name="read-only" value={info.family_friendly} readOnly /></div>
                                <div className='flex gap-2'><b>general_health: </b><Rating name="read-only" value={info.general_health} readOnly /></div>
                                <div className='flex gap-2'><b>grooming: </b><Rating name="read-only" value={info.grooming} readOnly /></div>
                                <div className='flex gap-2'><b>intelligence: </b><Rating name="read-only" value={info.intelligence} readOnly /></div>
                                <div className='flex gap-2'><b>length: </b>{info.length}</div>
                                <div className='flex gap-2'><b>max_life_expectancy: </b>{info.max_life_expectancy} years</div>
                                <div className='flex gap-2'><b>min_life_expectancy: </b>{info.min_life_expectancy} years</div>
                                <div className='flex gap-2'><b>max_weight: </b>{info.max_weight} kg</div>
                                <div className='flex gap-2'><b>min_weight: </b>{info.min_weight} kg</div>
                                <div className='flex gap-2'><b>meowing: </b><Rating name="read-only" value={info.meowing} readOnly /></div>
                                <div className='flex gap-2'><b>other_pets_friendly: </b><Rating name="read-only" value={info.other_pets_friendly} readOnly /></div>
                                <div className='flex gap-2'><b>playfulness: </b><Rating name="read-only" value={info.playfulness} readOnly /></div>
                                <div className='flex gap-2'><b>shedding: </b><Rating name="read-only" value={info.shedding} readOnly /></div>
                                <div className='flex gap-2'><b>stranger_friendly: </b><Rating name="read-only" value={info.stranger_friendly} readOnly /></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Content;