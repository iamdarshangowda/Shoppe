import React, { useState } from "react";
import { Box, Divider, Grid } from "@mui/material";
import { Filters } from "./inc/filters";
import { ListingCard } from "@/components/ui-components/common/cards/listing-card";
import Link from "next/link";
import BackdropLoader from "@/components/ui-components/common/backdropLoader";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { EmptyStateCard } from "@/components/ui-components/common/cards/empty-state-card";
import { useProducts } from "@/utils/hooks/useProducts";

interface Props {
  query?: any;
}

const Home: NextPage<Props> = ({ query }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<any>("");
  const { firestoneData, loading } = useProducts(searchValue);

  const handleClearFilters = () => {
    router.replace(`${router.pathname}`);
  };

  const handleRouterQuery = (type: string, category: string) => {
    router.push({
      pathname: "/home",
      query: { ...query, [type]: category },
    });
  };

  return (
    <>
      <Box display={{ xs: "block", sm: "flex" }} gap={4} mb={4}>
        <Box width={"100%"} maxWidth={{ xs: "100%", sm: 252 }} flexGrow={1}>
          <Filters
            handleQueryChange={handleRouterQuery}
            handleSearch={(value: string) => setSearchValue(value)}
            clearFilters={handleClearFilters}
          />
        </Box>
        <Divider orientation="vertical" flexItem sx={{ bgcolor: "#FAEAB1" }} />
        {firestoneData.length > 0 ? (
          <Grid container spacing={2}>
            {firestoneData.map((item: any, index: number) => (
              <Link
                href={`/product/${item.id}?collection=${item.category}`}
                legacyBehavior
                key={index}
              >
                <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={index}>
                  <ListingCard productDetails={item} />
                </Grid>
              </Link>
            ))}
          </Grid>
        ) : (
          <EmptyStateCard text={"No Items"} />
        )}
        <BackdropLoader open={loading} />
      </Box>
    </>
  );
};

export default Home;

Home.getInitialProps = async ({ query }) => {
  return { query };
};
