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
                      alt={location.image.alt}
                      height={location.image.height}
                      image={location.image.src}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {location.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {location.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {location.buttons.map((button) => {
                        return (
                          <Button size="small" target={button.target} href={button.link}>{button.text}</Button>
                        )}
                      )}
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
