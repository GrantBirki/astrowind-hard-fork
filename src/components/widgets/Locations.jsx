import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function Locations(props) {
  // Dynamically set the gridcss depending on how many items are in the locations list
  var gridCss = 'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  if (props.locations.length === 1) {
    gridCss = 'grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1';
  } else if (props.locations.length === 2) {
    gridCss = 'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2';
  }

  return (
    <section class="scroll-mt-16 dark:bg-slate-800 bg-blue-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="md:mx-auto text-center">
          <div class="py-12 md:py-20">
            {props.highlight && (
              <p class="text-base text-primary dark:text-blue-200 font-semibold tracking-wide uppercase">
                {props.highlight}
              </p>
            )}

            {props.title && (
              <h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
                {props.title}
              </h2>
            )}

            {props.subtitle && (
              <p class="max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400">{props.subtitle}</p>
            )}

            {/* <screensize>:grid-cols-<columns> tailwind */}
            <div class={gridCss}>
              {props.locations.map((location) => {
                return (
                  <Card
                    className="dark:bg-slate-900"
                    elevation={16}
                    raised={true}
                    sx={{ borderRadius: '0.5rem', margin: '2rem' }}
                  >
                    <CardMedia
                      component="img"
                      alt={location.image.alt}
                      height={location.image.height}
                      image={location.image.src}
                    />
                    <CardContent>
                      <h3 class="text-5xl md:text-3xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-white">
                        {location.name}
                      </h3>
                      {location.description && (
                        <p class="max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400">
                          {location.description}
                        </p>
                      )}
                      {location.address.enabled && (
                        <div class="py-2 max-w-3xl mx-auto sm:text-center text-l text-muted dark:text-slate-400">
                          <p>Address:</p>
                          <p>{location.address.line1}</p>
                          <p>{location.address.line2}</p>
                          <p>
                            {location.address.city}, {location.address.state} {location.address.postcode}
                          </p>
                          <p>{location.address.country}</p>
                        </div>
                      )}
                    </CardContent>
                    <CardActions>
                      {location.buttons.map((button) => {
                        var icon = null;
                        if (button.icon === 'phone') {
                          icon = <PhoneIcon />;
                        } else if (button.icon === 'email') {
                          icon = <EmailIcon />;
                        } else if (button.icon === 'directions') {
                          icon = <DirectionsIcon />;
                        }

                        return (
                          <Button startIcon={icon} size={button.size} target={button.target} href={button.link}>
                            {button.text}
                          </Button>
                        );
                      })}
                    </CardActions>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
