import { useList } from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui'
import {
   PieChart,
   PropertyReferrals,
   TotalRevenue,
   PropertyCard,
   TopAgent,
} from 'components'
import { config } from 'process'

const Home = () => {
   const { data, isLoading, isError } = useList({
      resource: 'properties',
      config: {
         pagination: {
            pageSize: 4
         }
      }
   })

   const latestProperties = data?.data ?? []

   if (isLoading) return <Typography>Loading...</Typography>
   if (isError) return <Typography>Error...</Typography>

   return (
      <Box>
         {/* heading  */}
         <Typography fontSize={25} fontWeight={700} color="#11142D" >
            Dashboard
         </Typography >

         {/* piechart  */}
         <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
            <PieChart
               title="Properties for Sale"
               value={684}
               series={[75, 25]}
               colors={["#475be8", "#e4e8ef"]}
            />
            <PieChart
               title="Properties for Rent"
               value={546}
               series={[50, 50]}
               colors={["#cfcf11", "#e4e8ef"]}
            />
            <PieChart
               title="Total Customer"
               value={5732}
               series={[75, 25]}
               colors={["#27fc11", "#e4e8ef"]}
            />
            <PieChart
               title="Total City"
               value={90}
               series={[85, 15]}
               colors={["#fda141", "#dfe8ef"]}
            />
         </Box>

         {/* barChart  */}
         <Stack mt="25px" width="100%" direction={{ xs: "column", lg: 'row' }} gap={4}>
            <TotalRevenue />
            <PropertyReferrals />
         </Stack>

         <Box
            flex={1}
            borderRadius='15px'
            padding='20px'
            bgcolor='#fcfcfc'
            display='flex'
            flexDirection='column'
            minWidth='100%'
            mt='25px'
         >
            <Typography
               fontSize='18px'
               fontWeight={600}
               color='#11142d'
            >
               Latest Properties
            </Typography>

            <Box mt={2.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
               {latestProperties.map((property) => (
                  <PropertyCard
                     key={property._id}
                     id={property._id}
                     title={property.title}
                     location={property.price}
                     price={property.price}
                     photo={property.photo}
                  />
               ))

               }
            </Box>
         </Box>

      </Box >
   )
}

export default Home 