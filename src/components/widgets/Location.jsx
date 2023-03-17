import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

export default function Location(props) {
  return (
    <section class="scroll-mt-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="md:mx-auto text-center">
          <div class="py-12 md:py-20">
            <h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
              {props.title}
            </h2>
            <Container maxWidth="lg" sx={{ display: 'flex' }}>
              {props.locations.map((location) => {
                return (
                  <Card sx={{ borderRadius: '0.5rem', margin: '2rem' }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="https://images.unsplash.com/photo-1678986992005-87c3f4a2b0af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {location.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                        continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                );
              })}
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
