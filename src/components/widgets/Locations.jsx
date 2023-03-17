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
    <section className="scroll-mt-16 dark:bg-slate-800 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="md:mx-auto text-center">
          <div className="py-12 md:py-20">
            {props.highlight && (
              <p className="text-base text-primary dark:text-blue-200 font-semibold tracking-wide uppercase">
                {props.highlight}
              </p>
            )}

            {props.title && (
              <h2 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
                {props.title}
              </h2>
            )}

            {props.subtitle && (
              <p className="max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400">
                {props.subtitle}
              </p>
            )}

            {/* <screensize>:grid-cols-<columns> tailwind */}
            <div className={gridCss}>
              {props.locations.map((location) => {
                return (
                  <Card
                    className="dark:bg-slate-900"
                    elevation={16}
                    raised={true}
                    sx={{ borderRadius: '0.5rem', margin: '2rem' }}
                    key={location.name}
                  >
                    <CardMedia
                      component="img"
                      alt={location.image.alt}
                      height={location.image.height}
                      image={location.image.src}
                    />
                    <CardContent>
                      <h3 className="sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-white">
                        {location.name}
                      </h3>
                      {location.description && (
                        <p className="max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400">
                          {location.description}
                        </p>
                      )}
                      {location.address.enabled && (
                        <div className="py-2 max-w-3xl mx-auto sm:text-center text-l text-muted dark:text-slate-400">
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
                      {location.buttons.map((button, index) => {
                        var icon = null;
                        if (button.icon === 'phone') {
                          icon = <PhoneIcon />;
                        } else if (button.icon === 'email') {
                          icon = <EmailIcon />;
                        } else if (button.icon === 'directions') {
                          icon = <DirectionsIcon />;
                        }

                        return (
                          <Button
                            key={index}
                            startIcon={icon}
                            size={button.size}
                            target={button.target}
                            href={button.link}
                          >
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
