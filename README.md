# Angular-CLI webpack
If you already have angular-cli

npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@webpack

For Fresh Angular-cli

npm install -g angular-cli@webpack

# Clone Repo
Now clone the repo


# Post Install Settings
typings install --global dt~hammerjs

npm install --save hammerjs @types/hammerjs

add in main.ts

import 'hammerjs';


# Install Packages
npm install


#build
ng build

#Copy Assets and Service Worker

npm test

# start
npm start




    <md-card>
      <button md-button>FLAT</button>
      <button md-raised-button md-tooltip="This is a tooltip!">RAISED</button>
      <button md-raised-button color="primary">PRIMARY RAISED</button>
      <button md-raised-button color="accent">ACCENT RAISED</button>
    </md-card>

    <md-card>
      <h1>
        {{title}}
      </h1>
      
    </md-card>
    
    <md-card>
      <md-checkbox>Unchecked</md-checkbox>
      <md-checkbox [checked]="true">Checked</md-checkbox>
      <md-checkbox [indeterminate]="true">Indeterminate</md-checkbox>
      <md-checkbox [disabled]="true">Disabled</md-checkbox>
    </md-card>

    <md-card>
      <md-radio-button name="symbol">Alpha</md-radio-button>
      <md-radio-button name="symbol">Beta</md-radio-button>
      <md-radio-button name="symbol" disabled>Gamma</md-radio-button>
    </md-card>

    <md-card class="app-input-section">
      <md-input placeholder="First name"></md-input>

      <md-input #nickname placeholder="Nickname" maxlength="50">
        <md-hint align="end">
          {{nickname.characterCount}} / 50
        </md-hint>
      </md-input>

      <md-input>
        <md-placeholder>
          <i class="material-icons app-input-icon">android</i> Favorite phone
        </md-placeholder>
      </md-input>

      <md-input placeholder="Motorcycle model">
        <span md-prefix>
          <i class="material-icons app-input-icon">motorcycle</i>
          &nbsp;
        </span>
      </md-input>
    </md-card>

    <md-card>
      <md-list class="app-list">
        <md-list-item *ngFor="let food of foods">
          <h3 md-line>{{food.name}}</h3>
          <p md-line class="demo-secondary-text">{{food.rating}}</p>
        </md-list-item>
      </md-list>
    </md-card>

    <md-card>
      <md-spinner class="app-spinner"></md-spinner>
      <md-spinner color="accent" class="app-spinner"></md-spinner>
    </md-card>

    <md-card>
      <label>
        Indeterminate progress-bar
        <md-progress-bar
            class="app-progress"
            mode="indeterminate"
            aria-label="Indeterminate progress-bar example"></md-progress-bar>
      </label>

      <label>
        Determinate progress bar - {{progress}}%
        <md-progress-bar
            class="app-progress"
            color="accent"
            mode="determinate"
            [value]="progress"
            aria-label="Determinate progress-bar example"></md-progress-bar>
      </label>
    </md-card>

    <md-card>
      <md-tab-group>
        <md-tab>
          <template md-tab-label>
            Earth
          </template>
          <template md-tab-content>
            <p>EARTH</p>
          </template>
        </md-tab>
        <md-tab>
          <template md-tab-label>
            Fire
          </template>
          <template md-tab-content>
            <p>FIRE</p>
          </template>
        </md-tab>
      </md-tab-group>
    </md-card>


    <md-card>
      <md-icon>build</md-icon>
    </md-card>

    <md-card>
      <md-slider min="1" max="5"></md-slider>
    </md-card>
  